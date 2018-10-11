
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLicensedUrlBaseRequestArgs  extends KalturaObjectBaseArgs {
    assetId? : string;
}


export class KalturaLicensedUrlBaseRequest extends KalturaObjectBase {

    assetId : string;

    constructor(data? : KalturaLicensedUrlBaseRequestArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLicensedUrlBaseRequest' },
				assetId : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLicensedUrlBaseRequest'] = KalturaLicensedUrlBaseRequest;