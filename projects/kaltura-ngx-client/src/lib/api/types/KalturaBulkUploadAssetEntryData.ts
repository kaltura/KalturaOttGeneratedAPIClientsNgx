
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadEntryData, KalturaBulkUploadEntryDataArgs } from './KalturaBulkUploadEntryData';

export interface KalturaBulkUploadAssetEntryDataArgs  extends KalturaBulkUploadEntryDataArgs {
    
}


export class KalturaBulkUploadAssetEntryData extends KalturaBulkUploadEntryData {

    

    constructor(data? : KalturaBulkUploadAssetEntryDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadAssetEntryData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadAssetEntryData'] = KalturaBulkUploadAssetEntryData;