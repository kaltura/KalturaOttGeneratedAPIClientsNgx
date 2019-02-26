
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadAssetEntryData, KalturaBulkUploadAssetEntryDataArgs } from './KalturaBulkUploadAssetEntryData';

export interface KalturaBulkUploadMediaEntryDataArgs  extends KalturaBulkUploadAssetEntryDataArgs {
    
}


export class KalturaBulkUploadMediaEntryData extends KalturaBulkUploadAssetEntryData {

    

    constructor(data? : KalturaBulkUploadMediaEntryDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadMediaEntryData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadMediaEntryData'] = KalturaBulkUploadMediaEntryData;