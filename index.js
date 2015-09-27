'use strict';

module.exports = {
  rules: {
    'no-session': require('./lib/rules/no-session'),
    'no-blaze-lifecycle-assignment': require('./lib/rules/no-blaze-lifecycle-assignment'),
    'no-zero-timeout': require('./lib/rules/no-zero-timeout'),
    'audit-argument-checks': require('./lib/rules/audit-argument-checks')
  },
  rulesConfig: {
    'no-session': 0,
    'no-blaze-lifecycle-assignment': 0,
    'no-zero-timeout': 0,
    'audit-argument-checks': 0
  }
};
