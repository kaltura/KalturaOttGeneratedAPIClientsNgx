
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaContentResourceArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaContentResource extends KalturaObjectBase {

    

    constructor(data? : KalturaContentResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaContentResource' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaContentResource'] = KalturaContentResource;