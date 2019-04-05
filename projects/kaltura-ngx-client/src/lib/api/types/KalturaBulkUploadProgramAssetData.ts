
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadAssetData, KalturaBulkUploadAssetDataArgs } from './KalturaBulkUploadAssetData';

export interface KalturaBulkUploadProgramAssetDataArgs  extends KalturaBulkUploadAssetDataArgs {
    
}


export class KalturaBulkUploadProgramAssetData extends KalturaBulkUploadAssetData {

    

    constructor(data? : KalturaBulkUploadProgramAssetDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadProgramAssetData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadProgramAssetData'] = KalturaBulkUploadProgramAssetData;