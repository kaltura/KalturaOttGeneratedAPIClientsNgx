
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSegementAssetFilterAction, KalturaSegementAssetFilterActionArgs } from './KalturaSegementAssetFilterAction';

export interface KalturaSegementAssetFilterSegmentActionArgs  extends KalturaSegementAssetFilterActionArgs {
    
}


export class KalturaSegementAssetFilterSegmentAction extends KalturaSegementAssetFilterAction {

    

    constructor(data? : KalturaSegementAssetFilterSegmentActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegementAssetFilterSegmentAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSegementAssetFilterSegmentAction'] = KalturaSegementAssetFilterSegmentAction;