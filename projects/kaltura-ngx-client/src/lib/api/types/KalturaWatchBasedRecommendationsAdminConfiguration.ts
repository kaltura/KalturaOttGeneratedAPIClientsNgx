
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaWatchBasedRecommendationsAdminConfigurationArgs  extends KalturaObjectBaseArgs {
    maxProfiles? : number;
	activeUserDurationDays? : number;
	recommendationsCachingTimeDays? : number;
	playbackInterestsCalculationPeriodDays? : number;
}


export class KalturaWatchBasedRecommendationsAdminConfiguration extends KalturaObjectBase {

    maxProfiles : number;
	activeUserDurationDays : number;
	recommendationsCachingTimeDays : number;
	playbackInterestsCalculationPeriodDays : number;

    constructor(data? : KalturaWatchBasedRecommendationsAdminConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWatchBasedRecommendationsAdminConfiguration' },
				maxProfiles : { type : 'n' },
				activeUserDurationDays : { type : 'n' },
				recommendationsCachingTimeDays : { type : 'n' },
				playbackInterestsCalculationPeriodDays : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaWatchBasedRecommendationsAdminConfiguration'] = KalturaWatchBasedRecommendationsAdminConfiguration;