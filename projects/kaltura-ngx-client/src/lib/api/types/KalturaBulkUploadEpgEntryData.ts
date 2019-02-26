
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadAssetEntryData, KalturaBulkUploadAssetEntryDataArgs } from './KalturaBulkUploadAssetEntryData';

export interface KalturaBulkUploadEpgEntryDataArgs  extends KalturaBulkUploadAssetEntryDataArgs {
    
}


export class KalturaBulkUploadEpgEntryData extends KalturaBulkUploadAssetEntryData {

    

    constructor(data? : KalturaBulkUploadEpgEntryDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadEpgEntryData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadEpgEntryData'] = KalturaBulkUploadEpgEntryData;