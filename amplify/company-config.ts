export interface CompanyConfig {
  name: string;
  prefix: string;
  rwGroups: string[];
  roGroups: string[];
}

export const companies: CompanyConfig[] = [
  {
    name: 'Portfolio Company A',
    prefix: 'portco-a',
    rwGroups: ['portco-a-rw'],
    roGroups: []
  },
  {
    name: 'Portfolio Company B',
    prefix: 'portco-b',
    rwGroups: ['portco-b-rw'],
    roGroups: ['portco-b-ro'],
  },
];

export function getAllGroups(): string[] {
  const groups: string[] = [];
  companies.forEach(company => {
    groups.push(...company.rwGroups, ...company.roGroups);
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
    // Read-only groups get read access
    if (company.roGroups.length > 0) {
      rules.push(allow.groups(company.roGroups).to(['read']));
    }

    accessRules[`${company.prefix}/*`] = rules;
  });

  return accessRules;
}
