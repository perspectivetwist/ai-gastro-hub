# Gastro Hub Copy-Update (2026-04-01)

## Was gebaut
Alle sichtbaren Texte der Hub-Landingpage von Tech-Jargon auf VoC/Hormozi-basierte Sprache umgestellt. 12 Dateien, 30 Tasks in 5 Phasen.

## Problem
Alte Copy war tech-lastig ("AI-Readiness", "AEO Scanner", "GEO Scanner"). Zielgruppe (Einzelgastronomen 45-55) versteht das nicht und fühlt sich nicht angesprochen.

## Lösung
Konzeptdokument-basierter Copy-Update mit VoC-Sprache ("Kennt ChatGPT dein Restaurant?", "Dein Essen ist großartig"), Hormozi Value Equation (Dream Outcome, Time Delay, Effort, Likelihood) und verifizierte Marktdaten (78% BrightEdge, 2.900 Creditreform, 58% Lightspeed).

## Geänderte Dateien
- app/layout.tsx (Meta Title + Description + og-Tags)
- app/page.tsx (SEO-Kommentar + Trust-Absatz)
- components/AnnouncementBanner.tsx (Banner-Text)
- components/HeroSection.tsx (Eyebrow + H1 + Subline + CTA)
- components/ProblemSection.tsx (H2 + Intros + Stats)
- components/MoreProblemsSection.tsx (3 Problem-Cards)
- components/SolutionSection.tsx (H2 + Body)
- components/ProductsSection.tsx (4 Scanner-Namen + Sublines)
- components/VisionSection.tsx (Body + CTA)
- components/GastroFaq.tsx (6 FAQ Q&A)
- components/JsonLdSchema.tsx (FAQPage Schema sync)
- components/TrustSection.tsx (Cross-Sell Block)

## NICHT geändert (per Anweisung)
- components/NavLinks.tsx (Header)
- components/TrustSection.tsx Zeile 93-148 (Footer: Newsroom, Report, Copyright)
- app/ai-readiness-report-2026/ (Studienseite)

## Was funktioniert hat
- Konzeptdokument als Single Source of Truth
- Phase-für-Phase Abarbeitung mit sofortiger Notion-Doku
- grep-Verifikation nach jeder Phase (VoC-Begriffe, "30 Sekunden")
- JsonLdSchema sync mit GastroFaq (FAQ in 2 Dateien)

## Was vermeiden
- Task-Prompts können vom Konzeptdokument abweichen (z.B. "Sicherheits-Check" statt "Daten-Check") — immer Konzeptdokument als Referenz nehmen
- "30 Sekunden" existierte noch in JsonLdSchema.tsx nachdem GastroFaq bereits auf "60 Sekunden" geändert war — FAQ-Content immer in beiden Dateien prüfen

## Nächstes Mal
- Konzeptdokument-Abgleich als ersten Schritt in Phase 5, nicht erst am Ende
- Scanner-Namen zentral definieren (aktuell in 3 Dateien: ProductsSection, TrustSection, GastroFaq)
