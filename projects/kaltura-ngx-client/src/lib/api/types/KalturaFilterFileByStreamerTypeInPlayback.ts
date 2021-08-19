
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByStreamerType, KalturaFilterFileByStreamerTypeArgs } from './KalturaFilterFileByStreamerType';

export interface KalturaFilterFileByStreamerTypeInPlaybackArgs  extends KalturaFilterFileByStreamerTypeArgs {
    
}


export class KalturaFilterFileByStreamerTypeInPlayback extends KalturaFilterFileByStreamerType {

    

    constructor(data? : KalturaFilterFileByStreamerTypeInPlaybackArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByStreamerTypeInPlayback' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByStreamerTypeInPlayback'] = KalturaFilterFileByStreamerTypeInPlayback;