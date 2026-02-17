"use client";
import styles from './Settings.module.css';
import { useState } from 'react';

const Settings = () => {

  const [activeSection, setActiveSection] = useState('Profile');


  return (
    <div className={styles.settingsContainer}>
      <div className={styles.settingsSections}>
        <div className={ activeSection === 'Profile' ? `${styles.settingsSection} ${styles.settingsSectionActive}` : styles.settingsSection}>
          <a onClick={() => setActiveSection('Profile')}>Profile</a>
        </div>
        <div className={ activeSection === 'Security' ? `${styles.settingsSection} ${styles.settingsSectionActive}` : styles.settingsSection}>
          <a onClick={() => setActiveSection('Security')}>Security</a>
        </div>
        <div className={ activeSection === 'Notifications' ? `${styles.settingsSection} ${styles.settingsSectionActive}` : styles.settingsSection}>
          <a onClick={() => setActiveSection('Notifications')}>Notifications</a>
        </div>
        <div className={ activeSection === 'Billing' ? `${styles.settingsSection} ${styles.settingsSectionActive}` : styles.settingsSection}>
          <a onClick={() => setActiveSection('Billing')}>Billing</a>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Settings;
