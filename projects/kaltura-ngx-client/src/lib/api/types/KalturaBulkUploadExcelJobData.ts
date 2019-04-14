
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadJobData, KalturaBulkUploadJobDataArgs } from './KalturaBulkUploadJobData';

export interface KalturaBulkUploadExcelJobDataArgs  extends KalturaBulkUploadJobDataArgs {
    
}


export class KalturaBulkUploadExcelJobData extends KalturaBulkUploadJobData {

    

    constructor(data? : KalturaBulkUploadExcelJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadExcelJobData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadExcelJobData'] = KalturaBulkUploadExcelJobData;