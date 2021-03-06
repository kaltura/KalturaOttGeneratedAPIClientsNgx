
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExportTask } from './KalturaExportTask';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ExportTaskGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'exportTask' action 'get'.
 *
 * Usage: Gets an existing bulk export task by task identifier
 *
 * Server response type:         KalturaExportTask
 * Server failure response type: KalturaAPIException
 */
export class ExportTaskGetAction extends KalturaRequest<KalturaExportTask> {

    id : number;

    constructor(data : ExportTaskGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaExportTask', responseConstructor : KalturaExportTask  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'exporttask' },
				action : { type : 'c', default : 'get' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

