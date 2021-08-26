
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByAudioCodecAction, KalturaFilterFileByAudioCodecActionArgs } from './KalturaFilterFileByAudioCodecAction';

export interface KalturaFilterFileByAudioCodecInPlaybackActionArgs  extends KalturaFilterFileByAudioCodecActionArgs {
    
}


export class KalturaFilterFileByAudioCodecInPlaybackAction extends KalturaFilterFileByAudioCodecAction {

    

    constructor(data? : KalturaFilterFileByAudioCodecInPlaybackActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByAudioCodecInPlaybackAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByAudioCodecInPlaybackAction'] = KalturaFilterFileByAudioCodecInPlaybackAction;