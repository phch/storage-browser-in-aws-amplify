/**
 * Central configuration for company access control
 * Define all companies and their associated user groups here
 */

export interface CompanyConfig {
  name: string;
  prefix: string;
  rwGroups: string[];
}

export const companies: CompanyConfig[] = [
  {
    name: 'Company 1',
    prefix: 'company-1',
    rwGroups: ['company-1-rw'],
  },
  {
    name: 'Company 2',
    prefix: 'company-2',
    rwGroups: ['company-2-rw'],
  },
  {
    name: 'Portfolio Company A',
    prefix: 'portco-a',
    rwGroups: ['portco-a-rw'],
  },
  // Add more companies here as needed
];

/**
 * Get all group names for Cognito configuration
 */
export function getAllGroups(): string[] {
  const groups: string[] = [];
  companies.forEach(company => {
    groups.push(...company.rwGroups);
  });
  return groups;
}

/**
 * Build storage access rules for Amplify Storage
 */
export function buildStorageAccessRules(allow: any): Record<string, any[]> {
  const accessRules: Record<string, any[]> = {};

  companies.forEach(company => {
    const rules = [];

    // Read-write groups get full access
    if (company.rwGroups.length > 0) {
      rules.push(
        allow.groups(company.rwGroups).to(['read', 'write', 'delete'])
      );
    }

    accessRules[`${company.prefix}/*`] = rules;
  });

  return accessRules;
}
