
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectState } from './KalturaObjectState';
import { KalturaBasePromotion } from './KalturaBasePromotion';
import { KalturaOTTObjectSupportNullable, KalturaOTTObjectSupportNullableArgs } from './KalturaOTTObjectSupportNullable';

export interface KalturaCampaignArgs  extends KalturaOTTObjectSupportNullableArgs {
    startDate? : number;
	endDate? : number;
	name? : string;
	systemName? : string;
	description? : string;
	promotion? : KalturaBasePromotion;
	message? : string;
	collectionIdIn? : string;
	assetUserRuleId? : number;
}


export class KalturaCampaign extends KalturaOTTObjectSupportNullable {

    readonly id : number;
	readonly createDate : number;
	readonly updateDate : number;
	startDate : number;
	endDate : number;
	name : string;
	systemName : string;
	description : string;
	readonly state : KalturaObjectState;
	promotion : KalturaBasePromotion;
	message : string;
	collectionIdIn : string;
	assetUserRuleId : number;

    constructor(data? : KalturaCampaignArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCampaign' },
				id : { type : 'n', readOnly : true },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true },
				startDate : { type : 'n' },
				endDate : { type : 'n' },
				name : { type : 's' },
				systemName : { type : 's' },
				description : { type : 's' },
				state : { type : 'es', readOnly : true, subTypeConstructor : KalturaObjectState, subType : 'KalturaObjectState' },
				promotion : { type : 'o', subTypeConstructor : KalturaBasePromotion, subType : 'KalturaBasePromotion' },
				message : { type : 's' },
				collectionIdIn : { type : 's' },
				assetUserRuleId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCampaign'] = KalturaCampaign;