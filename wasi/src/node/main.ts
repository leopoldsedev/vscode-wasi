/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import RIL from './ril';

// Install the browser runtime abstract.
RIL.install();

export { WASI } from '../common/wasi';

import { MessagePort, Worker, TransferListItem } from 'worker_threads';