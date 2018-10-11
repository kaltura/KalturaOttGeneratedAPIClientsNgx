
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAssetGroupByArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaAssetGroupBy extends KalturaObjectBase {

    

    constructor(data? : KalturaAssetGroupByArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetGroupBy' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAssetGroupBy'] = KalturaAssetGroupBy;