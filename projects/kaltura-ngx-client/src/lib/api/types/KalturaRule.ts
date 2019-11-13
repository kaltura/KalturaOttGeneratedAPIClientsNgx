
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaOTTObjectSupportNullable, KalturaOTTObjectSupportNullableArgs } from './KalturaOTTObjectSupportNullable';

export interface KalturaRuleArgs  extends KalturaOTTObjectSupportNullableArgs {
    name? : string;
	description? : string;
	label? : string;
}


export class KalturaRule extends KalturaOTTObjectSupportNullable {

    readonly id : number;
	name : string;
	description : string;
	label : string;

    constructor(data? : KalturaRuleArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRule' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				description : { type : 's' },
				label : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRule'] = KalturaRule;