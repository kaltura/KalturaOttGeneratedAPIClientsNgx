
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaAssetStructFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
	metaIdEqual? : number;
	isProtectedEqual? : boolean;
}


export class KalturaAssetStructFilter extends KalturaFilter {

    idIn : string;
	metaIdEqual : number;
	isProtectedEqual : boolean;

    constructor(data? : KalturaAssetStructFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetStructFilter' },
				idIn : { type : 's' },
				metaIdEqual : { type : 'n' },
				isProtectedEqual : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetStructFilter'] = KalturaAssetStructFilter;