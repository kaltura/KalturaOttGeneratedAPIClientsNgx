
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDispatcher, KalturaDispatcherArgs } from './KalturaDispatcher';

export interface KalturaMailDispatcherArgs  extends KalturaDispatcherArgs {
    bodyTemplate? : string;
	subjectTemplate? : string;
}


export class KalturaMailDispatcher extends KalturaDispatcher {

    bodyTemplate : string;
	subjectTemplate : string;

    constructor(data? : KalturaMailDispatcherArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMailDispatcher' },
				bodyTemplate : { type : 's' },
				subjectTemplate : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMailDispatcher'] = KalturaMailDispatcher;