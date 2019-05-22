
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaTrigger } from './KalturaTrigger';
import { KalturaDispatcher } from './KalturaDispatcher';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaTopicNotificationMessageArgs  extends KalturaObjectBaseArgs {
    message? : string;
	topicNotificationId? : number;
	trigger? : KalturaTrigger;
	dispatchers? : KalturaDispatcher[];
}


export class KalturaTopicNotificationMessage extends KalturaObjectBase {

    readonly id : number;
	message : string;
	topicNotificationId : number;
	trigger : KalturaTrigger;
	dispatchers : KalturaDispatcher[];

    constructor(data? : KalturaTopicNotificationMessageArgs)
    {
        super(data);
        if (typeof this.dispatchers === 'undefined') this.dispatchers = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTopicNotificationMessage' },
				id : { type : 'n', readOnly : true },
				message : { type : 's' },
				topicNotificationId : { type : 'n' },
				trigger : { type : 'o', subTypeConstructor : KalturaTrigger, subType : 'KalturaTrigger' },
				dispatchers : { type : 'a', subTypeConstructor : KalturaDispatcher, subType : 'KalturaDispatcher' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaTopicNotificationMessage'] = KalturaTopicNotificationMessage;