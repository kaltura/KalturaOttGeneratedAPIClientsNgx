
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadJobData, KalturaBulkUploadJobDataArgs } from './KalturaBulkUploadJobData';

export interface KalturaBulkUploadIngestJobDataArgs  extends KalturaBulkUploadJobDataArgs {
    ingestProfileId? : number;
}


export class KalturaBulkUploadIngestJobData extends KalturaBulkUploadJobData {

    ingestProfileId : number;

    constructor(data? : KalturaBulkUploadIngestJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadIngestJobData' },
				ingestProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadIngestJobData'] = KalturaBulkUploadIngestJobData;