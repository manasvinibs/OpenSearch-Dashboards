/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Get elements by their test ids
     * @example
     * cy.getElementsByTestIds(['query', 'puery'])
     */
    getElementsByTestIds<S = any>(
      testIds: string | string[],
      options?: Partial<Loggable & Timeoutable & Withinable & Shadow>
    ): Chainable<S>;
    /**
     * Get an element by its test id
     * @example
     * cy.getElementByTestId('query')
     */
    getElementByTestId<S = any>(
      testId: string,
      options?: Partial<Loggable & Timeoutable & Withinable & Shadow>
    ): Chainable<S>;
  }
}
