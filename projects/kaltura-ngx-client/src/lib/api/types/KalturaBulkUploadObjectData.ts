
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadJobAction } from './KalturaBulkUploadJobAction';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBulkUploadObjectDataArgs  extends KalturaObjectBaseArgs {
    action? : KalturaBulkUploadJobAction;
}


export class KalturaBulkUploadObjectData extends KalturaObjectBase {

    action : KalturaBulkUploadJobAction;

    constructor(data? : KalturaBulkUploadObjectDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadObjectData' },
				action : { type : 'es', subTypeConstructor : KalturaBulkUploadJobAction, subType : 'KalturaBulkUploadJobAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadObjectData'] = KalturaBulkUploadObjectData;