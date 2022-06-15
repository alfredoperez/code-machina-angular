describe('modus', () => {
  beforeEach(() => cy.visit('/iframe.html?id=horizontalnavigationbarcomponent--primary'));
  it('should render the component', () => {
    cy.get('modus-horizontal-navigation-bar').should('exist');
  });
});