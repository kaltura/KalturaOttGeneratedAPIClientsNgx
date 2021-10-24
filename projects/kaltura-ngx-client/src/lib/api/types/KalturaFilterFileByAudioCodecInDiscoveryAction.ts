
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByAudioCodecAction, KalturaFilterFileByAudioCodecActionArgs } from './KalturaFilterFileByAudioCodecAction';

export interface KalturaFilterFileByAudioCodecInDiscoveryActionArgs  extends KalturaFilterFileByAudioCodecActionArgs {
    
}


export class KalturaFilterFileByAudioCodecInDiscoveryAction extends KalturaFilterFileByAudioCodecAction {

    

    constructor(data? : KalturaFilterFileByAudioCodecInDiscoveryActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByAudioCodecInDiscoveryAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByAudioCodecInDiscoveryAction'] = KalturaFilterFileByAudioCodecInDiscoveryAction;