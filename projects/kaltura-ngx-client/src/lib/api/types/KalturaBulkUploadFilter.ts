
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadJobStatus } from './KalturaBulkUploadJobStatus';
import { KalturaPersistedFilter, KalturaPersistedFilterArgs } from './KalturaPersistedFilter';

export interface KalturaBulkUploadFilterArgs  extends KalturaPersistedFilterArgs {
    statusEqual? : KalturaBulkUploadJobStatus;
}


export class KalturaBulkUploadFilter extends KalturaPersistedFilter {

    statusEqual : KalturaBulkUploadJobStatus;

    constructor(data? : KalturaBulkUploadFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadFilter' },
				statusEqual : { type : 'es', subTypeConstructor : KalturaBulkUploadJobStatus, subType : 'KalturaBulkUploadJobStatus' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadFilter'] = KalturaBulkUploadFilter;