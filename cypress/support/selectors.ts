export const selectors = {
  login: {
    email: '[data-testid="email"]',
    password: '[data-testid="senha"]',
    submit: '[data-testid="entrar"]',
  },
  signup: {
    name: '[data-testid="nome"]',
    emailSignup: '[data-testid="email"]',
    passwordSignup: '[data-testid="password"]',
    submitSignup: '[data-testid="cadastrar"]',
  },
} as const;
