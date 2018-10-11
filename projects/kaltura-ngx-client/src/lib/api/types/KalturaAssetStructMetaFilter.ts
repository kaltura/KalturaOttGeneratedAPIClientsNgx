
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaAssetStructMetaFilterArgs  extends KalturaFilterArgs {
    assetStructIdEqual? : number;
	metaIdEqual? : number;
}


export class KalturaAssetStructMetaFilter extends KalturaFilter {

    assetStructIdEqual : number;
	metaIdEqual : number;

    constructor(data? : KalturaAssetStructMetaFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetStructMetaFilter' },
				assetStructIdEqual : { type : 'n' },
				metaIdEqual : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetStructMetaFilter'] = KalturaAssetStructMetaFilter;