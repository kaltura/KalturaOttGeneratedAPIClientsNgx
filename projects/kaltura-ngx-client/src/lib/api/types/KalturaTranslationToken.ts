
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaTranslationTokenArgs  extends KalturaObjectBaseArgs {
    language? : string;
	value? : string;
}


export class KalturaTranslationToken extends KalturaObjectBase {

    language : string;
	value : string;

    constructor(data? : KalturaTranslationTokenArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTranslationToken' },
				language : { type : 's' },
				value : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaTranslationToken'] = KalturaTranslationToken;