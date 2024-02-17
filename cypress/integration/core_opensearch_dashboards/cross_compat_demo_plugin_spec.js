/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import {
  CommonUI,
  MiscUtils,
} from '@opensearch-dashboards-test/opensearch-dashboards-test-library';

export function dashboardSanityTests() {
  Cypress.Commands.add('getElementByTestId', (testId, options = {}) => {
    return cy.get(`[data-test-subj="${testId}"]`, options);
  });

  const commonUI = new CommonUI(cy);
  const miscUtils = new MiscUtils(cy);
  const baseURL = Cypress.config().baseUrl || '';
  console.log('baseURL: ', baseURL);

  // remove trailing slash
  const path = baseURL.replace(/\/$/, '');
  console.log('path: ', path);
  describe('XCompat-plugin-example1', () => {
    beforeEach(() => {
      cy.intercept('GET', '/api/example_plugin_1/verify_crosscompatability', {
        fixture: 'xCompat_response_data.json', // Fixture with sample response data
      }).as('exampleApi');
      miscUtils.visitPage('app/xcompatpluginexampleone');
      cy.getElementByTestId('toggleNavButton').click();
    });

    it('checking plugin navigation is enabled', () => {
      // Check that XCompat-plugin is visible
      cy.wait(1000);
      commonUI.checkElementExists(`a[href="${path}/app/xcompatpluginexampleone"]`, 1);
    });

    it('checking management display', () => {
      // Check that management is visable
      commonUI.checkElementExists(`a[href="${path}/app/management"]`, 1);
    });

    it('should display last timestamp as "Unknown" initially', () => {
      cy.contains('Last timestamp: Unknown');
    });

    it('should display result as empty initially', () => {
      cy.contains('Cross Compatibility Result: ');
    });

    /**
    it('should fetch data and update timestamp and result on button click', () => {
      cy.intercept('GET', '/api/example_plugin_1/verify_crosscompatability', {
        fixture: 'xCompat_response_data.json', // Fixture with sample response data
      }).as('exampleApi');

      cy.get(`a[href="${path}/app/XCompat-plugin-example1#/"]`).click();

      cy.contains('button', 'Check Cross Compatibility of OS plugins').should('be.visible').click();

      cy.wait('@exampleApi').then(() => {
        cy.get('@exampleApi').its('response.statusCode').should('eq', 200);
        cy.get('#XCompatMessageContainer').should('be.visible');
      });
    });*/
  });
  /**
  describe('XCompat-plugin-example2', () => {
    beforeEach(() => {
      cy.intercept('GET', '/api/example_plugin_2/verify_crosscompatability', {
        fixture: 'xCompat_response_data.json', // Fixture with sample response data
      }).as('exampleApi');
      miscUtils.visitPage('app/XCompat-plugin-example1#');
      cy.getElementByTestId('toggleNavButton').click();
    });

    it('checking plugin navigation is visible but disabled', () => {
      // Check that XCompat-plugin is visible
      commonUI.checkElementExists(`a[href="${path}/app/XCompat-plugin-example2#/"]`, 0);
      // Check if the button is disabled
      cy.get('button[data-test-subj="collapsibleNavAppLink"]').should('have.attr', 'disabled');
    });
  });

  describe('XCompat-plugin-example3', () => {
    beforeEach(() => {
      cy.intercept('GET', '/api/example_plugin_3/verify_crosscompatability', {
        fixture: 'xCompat_response_data.json', // Fixture with sample response data
      }).as('exampleApi');
      miscUtils.visitPage('app/XCompat-plugin-example3#');
      cy.getElementByTestId('toggleNavButton').click();
    });

    it('checking plugin navigation is hidden', () => {
      // Check that XCompat-plugin is hidden
      commonUI.checkElementExists(`a[href="${path}/app/XCompat-plugin-example1#/"]`, 0);
    });
  });**/
}
dashboardSanityTests();
