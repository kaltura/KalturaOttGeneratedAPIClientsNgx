
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaProgramSemanticSearchParamsArgs  extends KalturaObjectBaseArgs {
    endsBefore? : number;
	expiresAfter? : number;
}


export class KalturaProgramSemanticSearchParams extends KalturaObjectBase {

    endsBefore : number;
	expiresAfter : number;

    constructor(data? : KalturaProgramSemanticSearchParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaProgramSemanticSearchParams' },
				endsBefore : { type : 'n' },
				expiresAfter : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaProgramSemanticSearchParams'] = KalturaProgramSemanticSearchParams;