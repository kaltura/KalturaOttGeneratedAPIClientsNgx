
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetCount } from './KalturaAssetCount';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAssetsCountArgs  extends KalturaObjectBaseArgs {
    field? : string;
	objects? : KalturaAssetCount[];
}


export class KalturaAssetsCount extends KalturaObjectBase {

    field : string;
	objects : KalturaAssetCount[];

    constructor(data? : KalturaAssetsCountArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetsCount' },
				field : { type : 's' },
				objects : { type : 'a', subTypeConstructor : KalturaAssetCount, subType : 'KalturaAssetCount' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetsCount'] = KalturaAssetsCount;