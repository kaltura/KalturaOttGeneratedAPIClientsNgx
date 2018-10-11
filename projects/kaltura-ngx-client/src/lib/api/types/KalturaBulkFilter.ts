
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBatchJobStatus } from './KalturaBatchJobStatus';
import { KalturaPersistedFilter, KalturaPersistedFilterArgs } from './KalturaPersistedFilter';

export interface KalturaBulkFilterArgs  extends KalturaPersistedFilterArgs {
    statusEqual? : KalturaBatchJobStatus;
}


export class KalturaBulkFilter extends KalturaPersistedFilter {

    statusEqual : KalturaBatchJobStatus;

    constructor(data? : KalturaBulkFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkFilter' },
				statusEqual : { type : 'es', subTypeConstructor : KalturaBatchJobStatus, subType : 'KalturaBatchJobStatus' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkFilter'] = KalturaBulkFilter;