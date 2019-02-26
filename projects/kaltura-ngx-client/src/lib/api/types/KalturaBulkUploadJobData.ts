
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadEntryData } from './KalturaBulkUploadEntryData';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBulkUploadJobDataArgs  extends KalturaObjectBaseArgs {
    entryData? : KalturaBulkUploadEntryData;
}


export class KalturaBulkUploadJobData extends KalturaObjectBase {

    entryData : KalturaBulkUploadEntryData;

    constructor(data? : KalturaBulkUploadJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadJobData' },
				entryData : { type : 'o', subTypeConstructor : KalturaBulkUploadEntryData, subType : 'KalturaBulkUploadEntryData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadJobData'] = KalturaBulkUploadJobData;