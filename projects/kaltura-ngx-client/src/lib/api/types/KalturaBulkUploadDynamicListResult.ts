
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadResult, KalturaBulkUploadResultArgs } from './KalturaBulkUploadResult';

export interface KalturaBulkUploadDynamicListResultArgs  extends KalturaBulkUploadResultArgs {
    
}


export class KalturaBulkUploadDynamicListResult extends KalturaBulkUploadResult {

    

    constructor(data? : KalturaBulkUploadDynamicListResultArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadDynamicListResult' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadDynamicListResult'] = KalturaBulkUploadDynamicListResult;