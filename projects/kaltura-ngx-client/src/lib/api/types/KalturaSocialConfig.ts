
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSocialConfigArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaSocialConfig extends KalturaObjectBase {

    

    constructor(data? : KalturaSocialConfigArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSocialConfig' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSocialConfig'] = KalturaSocialConfig;