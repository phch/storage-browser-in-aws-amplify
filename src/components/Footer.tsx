import * as React from 'react';
import { Box, Link } from '@cloudscape-design/components';

export default function Footer() {
  return (
    <Box padding={{ vertical: 'l', horizontal: 's' }} textAlign="center">
      <Box variant="p" color="text-body-secondary">
        © {new Date().getFullYear()} Storage Browser. All rights reserved.
      </Box>
      <Box variant="p" color="text-body-secondary" margin={{ top: 'xs' }}>
        <Link href="#" variant="secondary">Privacy</Link>
        {' | '}
        <Link href="#" variant="secondary">Terms</Link>
        {' | '}
        <Link href="#" variant="secondary">Support</Link>
      </Box>
    </Box>
  );
}
