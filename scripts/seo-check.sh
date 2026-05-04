#!/usr/bin/env bash
# =============================================================================
# SEO Validation Script — ki-gastronomie.com
# Prüft alle 23+ URLs auf: HTTP-Status, Canonical, og:url, Schema.org URL
#
# Usage:
#   ./scripts/seo-check.sh              # Alle URLs prüfen
#   ./scripts/seo-check.sh --live       # Nur live-URLs (ohne Cache)
#   ./scripts/seo-check.sh --quick      # Nur Hauptseite + 1 Stadt + 1 Scanner
# =============================================================================

set -euo pipefail

DOMAIN="https://www.ki-gastronomie.com"
CACHE_BUSTER="?nocache=$(date +%s)"
PASS="✅"
FAIL="❌"
WARN="⚠️"
TOTAL=0
PASSED=0
FAILED=0

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color
BOLD='\033[1m'

# All 23 URLs from Brainstorm-Doc Sektion 3.1
URLS=(
  "/"
  "/ueber-uns"
  "/presse"
  "/newsroom"
  "/ai-readiness-report-2026"
  "/aeo-scanner"
  "/geo-scanner"
  "/agent-scanner"
  "/security-scanner"
  "/staedte/berlin"
  "/staedte/hamburg"
  "/staedte/muenchen"
  "/staedte/koeln"
  "/staedte/frankfurt"
  "/staedte/stuttgart"
  "/staedte/duesseldorf"
  "/staedte/leipzig"
  "/staedte/dortmund"
  "/staedte/mannheim"
)

# Quick mode: subset
if [[ "${1:-}" == "--quick" ]]; then
  URLS=("/" "/staedte/berlin" "/aeo-scanner")
  echo -e "${YELLOW}Quick mode: testing 3 URLs only${NC}"
fi

LIVE_FLAG=""
if [[ "${1:-}" == "--live" ]]; then
  LIVE_FLAG="yes"
  echo -e "${YELLOW}Live mode: cache-buster enabled${NC}"
fi

# Header
echo ""
echo -e "${BOLD}═══════════════════════════════════════════════════════════════════════${NC}"
echo -e "${BOLD}  SEO Validation — ${DOMAIN}${NC}"
echo -e "${BOLD}  $(date '+%Y-%m-%d %H:%M:%S')${NC}"
echo -e "${BOLD}═══════════════════════════════════════════════════════════════════════${NC}"
echo ""
printf "%-35s %-6s %-12s %-12s %-12s\n" "URL" "HTTP" "Canonical" "og:url" "Schema.org"
printf "%-35s %-6s %-12s %-12s %-12s\n" "---" "----" "---------" "------" "----------"

check_url() {
  local path="$1"
  local full_url="${DOMAIN}${path}"
  local fetch_url="$full_url"

  if [[ -n "$LIVE_FLAG" ]]; then
    fetch_url="${full_url}${CACHE_BUSTER}"
  fi

  TOTAL=$((TOTAL + 1))
  local ok=true

  # Fetch page with follow redirects, no-cache headers
  local html
  html=$(curl -sL -H "Cache-Control: no-cache" -H "Pragma: no-cache" \
    --max-time 15 "$fetch_url" 2>/dev/null) || {
    printf "%-35s ${RED}%-6s${NC} %-12s %-12s %-12s\n" "$path" "FAIL" "-" "-" "-"
    FAILED=$((FAILED + 1))
    return
  }

  # HTTP status
  local status
  status=$(curl -sL -o /dev/null -w "%{http_code}" -H "Cache-Control: no-cache" \
    --max-time 15 "$fetch_url" 2>/dev/null) || status="000"

  local status_icon="$PASS"
  if [[ "$status" != "200" ]]; then
    status_icon="$FAIL"
    ok=false
  fi

  # Canonical
  local canonical
  canonical=$(echo "$html" | grep -oP '(?<=rel="canonical" href=")[^"]*' | head -1)
  if [[ -z "$canonical" ]]; then
    canonical=$(echo "$html" | grep -oP "(?<=rel='canonical' href=')[^']*" | head -1)
  fi

  local canonical_icon="$FAIL"
  local expected_canonical="${DOMAIN}${path}"
  [[ "$path" == "/" ]] && expected_canonical="$DOMAIN"

  if [[ "$canonical" == "$expected_canonical" ]]; then
    canonical_icon="$PASS"
  elif [[ -n "$canonical" && "$canonical" == *"ki-gastronomie.com"* ]]; then
    canonical_icon="$WARN"
  else
    ok=false
  fi

  # og:url
  local og_url
  og_url=$(echo "$html" | grep -oP '(?<=property="og:url" content=")[^"]*' | head -1)

  local og_icon="$FAIL"
  if [[ "$og_url" == "$expected_canonical" ]]; then
    og_icon="$PASS"
  elif [[ -n "$og_url" && "$og_url" == *"ki-gastronomie.com"* ]]; then
    og_icon="$WARN"
  else
    ok=false
  fi

  # Schema.org Organization URL
  local schema_url
  schema_url=$(echo "$html" | grep -oP '"@type"\s*:\s*"Organization"[^}]*"url"\s*:\s*"[^"]*"' | grep -oP '"url"\s*:\s*"[^"]*"' | head -1 | grep -oP '"[^"]*"$' | tr -d '"')

  local schema_icon="$FAIL"
  if [[ "$schema_url" == "${DOMAIN}" || "$schema_url" == "${DOMAIN}/" ]]; then
    schema_icon="$PASS"
  elif [[ -n "$schema_url" && "$schema_url" == *"ki-gastronomie.com"* ]]; then
    schema_icon="$WARN"
  elif [[ -z "$schema_url" ]]; then
    schema_icon="-"
  else
    ok=false
  fi

  # Print row
  printf "%-35s %-6s %-12s %-12s %-12s\n" "$path" "${status}" "$canonical_icon" "$og_icon" "$schema_icon"

  if $ok; then
    PASSED=$((PASSED + 1))
  else
    FAILED=$((FAILED + 1))
  fi
}

# Run checks
for url in "${URLS[@]}"; do
  check_url "$url"
done

# Summary
echo ""
echo -e "${BOLD}═══════════════════════════════════════════════════════════════════════${NC}"
echo -e "  Total: ${TOTAL}  |  ${GREEN}Passed: ${PASSED}${NC}  |  ${RED}Failed: ${FAILED}${NC}"
echo -e "${BOLD}═══════════════════════════════════════════════════════════════════════${NC}"

# Additional checks
echo ""
echo -e "${BOLD}Zusätzliche Checks:${NC}"

# robots.txt
robots_sitemap=$(curl -sL "${DOMAIN}/robots.txt${CACHE_BUSTER}" 2>/dev/null | grep -i "sitemap:" | head -1)
if echo "$robots_sitemap" | grep -q "www.ki-gastronomie.com"; then
  echo "  robots.txt Sitemap: $PASS ($robots_sitemap)"
else
  echo "  robots.txt Sitemap: $FAIL ($robots_sitemap)"
fi

# sitemap.xml URL count
sitemap_count=$(curl -sL "${DOMAIN}/sitemap.xml${CACHE_BUSTER}" 2>/dev/null | grep -c "<loc>" || echo "0")
sitemap_vercel=$(curl -sL "${DOMAIN}/sitemap.xml${CACHE_BUSTER}" 2>/dev/null | grep -c "vercel" || echo "0")
echo "  sitemap.xml URLs: ${sitemap_count} (vercel refs: ${sitemap_vercel})"

echo ""

# Exit code
if [[ $FAILED -gt 0 ]]; then
  exit 1
fi
exit 0
