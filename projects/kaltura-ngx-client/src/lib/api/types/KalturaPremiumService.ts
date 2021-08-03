
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPremiumServiceArgs  extends KalturaObjectBaseArgs {
    id? : number;
	name? : string;
}


export class KalturaPremiumService extends KalturaObjectBase {

    id : number;
	name : string;

    constructor(data? : KalturaPremiumServiceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPremiumService' },
				id : { type : 'n' },
				name : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPremiumService'] = KalturaPremiumService;