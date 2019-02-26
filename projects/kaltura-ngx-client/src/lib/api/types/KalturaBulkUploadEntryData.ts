
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBulkUploadEntryDataArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaBulkUploadEntryData extends KalturaObjectBase {

    

    constructor(data? : KalturaBulkUploadEntryDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadEntryData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadEntryData'] = KalturaBulkUploadEntryData;