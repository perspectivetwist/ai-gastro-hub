# Weekly KI-Gastro-Newsroom — Fix & Konsolidierung

## Was gebaut
Weekly Newsroom Workflow repariert und konsolidiert. Workflow läuft nur noch zentral auf ai-gastro-hub, alle anderen Repos bereinigt.

## Problem
- Workflow existierte in 10 Stadtrepos (ai-gastro-hub-berlin bis -muenchen) auf GitHub
- ANTHROPIC_API_KEY fehlte als GitHub Secret
- VERCEL_DEPLOY_HOOK_GASTRO_HUB fehlte als GitHub Secret
- Workflow hatte keine `permissions: contents: write` → git push schlug mit 403 fehl
- Vercel "Require Verified Commits" blockierte alle Deployments (unsigned commits)
- Kein Deduplizierungs-Mechanismus → News-Themen wiederholten sich (TheFork+ChatGPT in KW 2, 12, 13)

## Lösung
1. Secrets gesetzt: ANTHROPIC_API_KEY (aus aeo-gastro/.env.local) + VERCEL_DEPLOY_HOOK
2. weekly-newsroom.yml aus 10 Stadtrepos per GitHub API gelöscht (nicht lokal geklont)
3. `permissions: contents: write` zum Workflow hinzugefügt
4. "Require Verified Commits" in Vercel Dashboard deaktiviert
5. Deduplizierung: Workflow liest letzte 6 Artikel und schickt Headlines+Titel als Blacklist an Claude

## Was funktioniert hat
- GitHub API zum Löschen von Dateien in nicht-geklonten Repos (`gh api -X DELETE repos/.../contents/...`)
- Deploy Hook URL für Vercel: `https://api.vercel.com/v1/integrations/deploy/prj_.../...`
- Sauberes Key-Parsing: `.env.local` hatte `\n` im Value → musste bereinigt werden

## Was vermeiden
- API Keys aus .env.local haben oft trailing `\n` oder escaped `\n` im String → immer bereinigen
- Mehrere Vercel Deploy Hooks schnell hintereinander triggern → Vercel cancelt alle
- "Require Verified Commits" in Vercel: blockiert GitHub Actions Commits (nicht GPG-signiert)
- Workflow ohne `permissions: contents: write` → GITHUB_TOKEN hat nur read-Zugriff

## Nächstes Mal
- Vor Workflow-Erstellung immer `permissions` Block setzen wenn git push nötig ist
- Vercel "Require Verified Commits" prüfen wenn Deployments cancelled werden
- Bei Multi-Repo-Cleanup: GitHub API statt lokales Klonen nutzen
- Deduplizierung von Anfang an einbauen wenn Content-Generierung wiederkehrend ist

## Architektur (Stand 2026-03-23)
- Newsroom existiert EINMAL: ai-gastro-hub.vercel.app/newsroom
- Workflow: .github/workflows/weekly-newsroom.yml (nur in ai-gastro-hub)
- Cron: Montag 12:00 DE-Zeit (0 10 * * 1 UTC)
- Scanner-Repos: Footer verlinkt extern auf ai-gastro-hub/newsroom
- Stadtrepos: Bereinigt, kein Workflow mehr
- Artikel: public/newsroom/kw-{N}-{YYYY}.json
