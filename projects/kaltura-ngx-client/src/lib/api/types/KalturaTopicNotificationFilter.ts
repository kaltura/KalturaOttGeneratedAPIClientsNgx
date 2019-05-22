
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSubscribeReference } from './KalturaSubscribeReference';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaTopicNotificationFilterArgs  extends KalturaFilterArgs {
    subscribeReference? : KalturaSubscribeReference;
}


export class KalturaTopicNotificationFilter extends KalturaFilter {

    subscribeReference : KalturaSubscribeReference;

    constructor(data? : KalturaTopicNotificationFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTopicNotificationFilter' },
				subscribeReference : { type : 'o', subTypeConstructor : KalturaSubscribeReference, subType : 'KalturaSubscribeReference' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaTopicNotificationFilter'] = KalturaTopicNotificationFilter;