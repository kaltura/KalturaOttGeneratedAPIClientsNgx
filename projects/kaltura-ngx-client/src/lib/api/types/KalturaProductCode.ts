
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaProductCodeArgs  extends KalturaObjectBaseArgs {
    inappProvider? : string;
	code? : string;
}


export class KalturaProductCode extends KalturaObjectBase {

    inappProvider : string;
	code : string;

    constructor(data? : KalturaProductCodeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaProductCode' },
				inappProvider : { type : 's' },
				code : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaProductCode'] = KalturaProductCode;