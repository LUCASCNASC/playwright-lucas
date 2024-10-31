import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com.br/');
  await page.getByLabel('Pesquisar', { exact: true }).fill('teste de velocidade');
  await page.goto('https://www.google.com.br/search?q=mais+um+teste&sca_esv=439ed1f28d78315f&ei=WMMiZ4HqM63Z1sQP8O750AM&ved=0ahUKEwiB9omKo7eJAxWtrJUCHXB3HjoQ4dUDCBA&uact=5&oq=mais+um+teste&gs_lp=Egxnd3Mtd2l6LXNlcnAiDW1haXMgdW0gdGVzdGUyBRAAGIAEMgYQABgWGB4yCBAAGKIEGIkFMggQABiABBiiBDIIEAAYogQYiQUyCBAAGIAEGKIESPAqUPIPWNkocAR4AZABAJgBogGgAe0OqgEEMC4xNbgBA8gBAPgBAZgCE6AC_g-oAhTCAhMQABiABBhDGLQCGIoFGOoC2AEBwgIdEAAYgAQYtAIY1AMY5QIYtwMYigUY6gIYigPYAQHCAhYQABgDGLQCGOUCGOoCGIwDGI8B2AECwgIWEC4YAxi0AhjlAhjqAhiMAxiPAdgBAsICChAAGIAEGEMYigXCAggQABiABBixA8ICCxAAGIAEGLEDGIMBwgIOEC4YgAQYsQMY0QMYxwHCAhAQABiABBixAxhDGIMBGIoFwgITEC4YgAQYsQMY0QMYQxjHARiKBcICEBAuGIAEGLEDGEMYgwEYigXCAgsQLhiABBixAxiDAcICDhAAGIAEGLEDGIMBGIoFwgIFEC4YgATCAg0QABiABBixAxiDARgKwgIQEC4YgAQY0QMYQxjHARiKBcICDRAAGIAEGLEDGEMYigXCAggQLhiABBixA8ICBxAAGIAEGArCAggQABgWGAoYHsICChAuGBYYChgeGA_CAgsQLhiABBjHARivAcICFBAuGIAEGJcFGNwEGN4EGOAE2AECmAMLugYECAEYB7oGBggCEAEYCpIHBDQuMTWgB8KTAQ&sclient=gws-wiz-serp');
});