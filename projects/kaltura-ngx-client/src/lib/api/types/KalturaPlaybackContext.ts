
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlaybackSource } from './KalturaPlaybackSource';
import { KalturaRuleAction } from './KalturaRuleAction';
import { KalturaAccessControlMessage } from './KalturaAccessControlMessage';
import { KalturaCaptionPlaybackPluginData } from './KalturaCaptionPlaybackPluginData';
import { KalturaBumpersPlaybackPluginData } from './KalturaBumpersPlaybackPluginData';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPlaybackContextArgs  extends KalturaObjectBaseArgs {
    sources? : KalturaPlaybackSource[];
	actions? : KalturaRuleAction[];
	messages? : KalturaAccessControlMessage[];
	playbackCaptions? : KalturaCaptionPlaybackPluginData[];
	playbackBumpers? : KalturaBumpersPlaybackPluginData[];
}


export class KalturaPlaybackContext extends KalturaObjectBase {

    sources : KalturaPlaybackSource[];
	actions : KalturaRuleAction[];
	messages : KalturaAccessControlMessage[];
	playbackCaptions : KalturaCaptionPlaybackPluginData[];
	playbackBumpers : KalturaBumpersPlaybackPluginData[];

    constructor(data? : KalturaPlaybackContextArgs)
    {
        super(data);
        if (typeof this.sources === 'undefined') this.sources = [];
		if (typeof this.actions === 'undefined') this.actions = [];
		if (typeof this.messages === 'undefined') this.messages = [];
		if (typeof this.playbackCaptions === 'undefined') this.playbackCaptions = [];
		if (typeof this.playbackBumpers === 'undefined') this.playbackBumpers = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlaybackContext' },
				sources : { type : 'a', subTypeConstructor : KalturaPlaybackSource, subType : 'KalturaPlaybackSource' },
				actions : { type : 'a', subTypeConstructor : KalturaRuleAction, subType : 'KalturaRuleAction' },
				messages : { type : 'a', subTypeConstructor : KalturaAccessControlMessage, subType : 'KalturaAccessControlMessage' },
				playbackCaptions : { type : 'a', subTypeConstructor : KalturaCaptionPlaybackPluginData, subType : 'KalturaCaptionPlaybackPluginData' },
				playbackBumpers : { type : 'a', subTypeConstructor : KalturaBumpersPlaybackPluginData, subType : 'KalturaBumpersPlaybackPluginData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPlaybackContext'] = KalturaPlaybackContext;