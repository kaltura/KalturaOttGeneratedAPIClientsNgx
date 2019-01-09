
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPlaybackPluginDataArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaPlaybackPluginData extends KalturaObjectBase {

    

    constructor(data? : KalturaPlaybackPluginDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlaybackPluginData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPlaybackPluginData'] = KalturaPlaybackPluginData;