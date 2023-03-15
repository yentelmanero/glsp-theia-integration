/********************************************************************************
 * Copyright (C) 2020-2023 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/

import { Disposable } from '@theia/core';

/**
 *  Common interface for `GLSPClientContribution` (frontend) and `GLSPServerContribution` (backend).
 */
export interface GLSPContribution extends Disposable {
    readonly id: string;
}

export namespace GLSPContribution {
    export const servicePath = '/services/glsp';
    export function getPath(contribution: GLSPContribution): string {
        return servicePath + '/' + contribution.id;
    }
    export const Service = Symbol('GLSPContributionService');
}
