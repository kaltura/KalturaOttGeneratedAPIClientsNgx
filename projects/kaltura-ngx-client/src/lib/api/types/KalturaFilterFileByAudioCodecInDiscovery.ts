
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByAudioCodec, KalturaFilterFileByAudioCodecArgs } from './KalturaFilterFileByAudioCodec';

export interface KalturaFilterFileByAudioCodecInDiscoveryArgs  extends KalturaFilterFileByAudioCodecArgs {
    
}


export class KalturaFilterFileByAudioCodecInDiscovery extends KalturaFilterFileByAudioCodec {

    

    constructor(data? : KalturaFilterFileByAudioCodecInDiscoveryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByAudioCodecInDiscovery' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByAudioCodecInDiscovery'] = KalturaFilterFileByAudioCodecInDiscovery;