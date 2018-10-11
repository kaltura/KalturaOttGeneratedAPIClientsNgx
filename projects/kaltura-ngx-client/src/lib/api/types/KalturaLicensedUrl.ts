
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLicensedUrlArgs  extends KalturaObjectBaseArgs {
    mainUrl? : string;
	altUrl? : string;
}


export class KalturaLicensedUrl extends KalturaObjectBase {

    mainUrl : string;
	altUrl : string;

    constructor(data? : KalturaLicensedUrlArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLicensedUrl' },
				mainUrl : { type : 's' },
				altUrl : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLicensedUrl'] = KalturaLicensedUrl;