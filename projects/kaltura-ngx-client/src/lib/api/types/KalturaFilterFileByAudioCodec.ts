
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetRuleAction, KalturaAssetRuleActionArgs } from './KalturaAssetRuleAction';

export interface KalturaFilterFileByAudioCodecArgs  extends KalturaAssetRuleActionArgs {
    audioCodecs? : string;
}


export class KalturaFilterFileByAudioCodec extends KalturaAssetRuleAction {

    audioCodecs : string;

    constructor(data? : KalturaFilterFileByAudioCodecArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByAudioCodec' },
				audioCodecs : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByAudioCodec'] = KalturaFilterFileByAudioCodec;